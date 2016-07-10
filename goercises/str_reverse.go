package main

import "fmt"

func main() {
	to_reverse := "Reverse me"
	newStr := ""
	for i := len(to_reverse) - 1; i >= 0; i-- {
		newStr = newStr + string(to_reverse[i])
	}
	fmt.Printf(newStr + "\n")
}
