#TCP Server and socket connections
require 'socket'
require 'uri'

WEB_ROOT ='./public'

#Map extentions to their content type
CONTENT_TYPE_MAPPING = {
  'html' => 'text/html',
  'txt' => 'text/plain',
  'png' => 'image/png',
  'jpg' => 'image/jpeg'
}

#Default to binary
DEFAULT_CONTENT_TYPE = 'application/octet-stream'

#Helper to parse file extention and look up content type
def content_type(path) 
  ext = File.extname(path).split(".").last
  CONTENT_TYPE_MAPPING.fetch(ext, DEFAULT_CONTENT_TYPE)
end

#Parse request line and generate a path to the file on the server
def requested_file(request_line)
  request_uri = request_line.split(" ")[1]

  path = URI.unescape(URI(request_uri).path)

  clean = []
  #split path into components
  parts = path.split("/")

  parts.each do |part|
    #skip empty and current directory path components
    next if part.empty? || part == '.'
    #if component goes up one level, remove last clean component
    part == '..' ? clean.pop : clean << part
    
  end
  #return the web root joined to the clean path
  File.join(WEB_ROOT, path)
end

#Init TCP server
server = TCPServer.new('localhost', 2345)

#loop indef, process one connection at a time
loop do

  #Wait untill client connects, then return TCP socket
  socket = server.accept
  #read Request-Line
  request_line = socket.gets
  #Log request for debugging
  STDERR.puts request_line

  path = requested_file(request_line)

  path = File.join(path, 'index.html') if File.directory?(path)

  #Check if file exists and that it is NOT a directory
  if File.exist?(path) && !File.directory?(path)
    File.open(path, "rb") do |file|
      #Include content type and size of data in response
      socket.print "HTTP/1.1 200 OK\r\n" +
                   "Content-Type: #{content_type(file)}\r\n" + 
                   "Content-Length: #{file.size}\r\n" +
                   "Connection: close\r\n"
    #Print blank line, as per protocol
    socket.print  "\r\n"
    #Write contents of file to the socket
    IO.copy_stream(file, socket)
    end
  else
    message = "File not found\n"
    #404 if File is not found
    socket.print "HTTP/1.1 404 Not Found\r\n" +
                 "Content-Type: text/plain\r\n" +
                 "Content-Length: #{message.size}\r\n" +
                 "Connection: close\r\n"
    socket.print '\r\n'
    
    socket.print message
  end
  #end connection
  socket.close

end
