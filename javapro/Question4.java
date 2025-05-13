import java.util.Scanner;

public class Question4 {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a word
        System.out.print("Enter a word: ");
        String word = scanner.nextLine();

        // Convert the word to lowercase to make the check case-insensitive
        word = word.toLowerCase();

        // Check if the word is a palindrome
        if (isPalindrome(word)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }

        // Close the scanner
        scanner.close();
    }

    // Function to check if a word is a palindrome
    public static boolean isPalindrome(String word) {
        int left = 0;
        int right = word.length() - 1;

        // Compare characters from both ends of the string
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}