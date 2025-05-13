import java.util.Scanner;
public class Question3{
	
	public static void main(String[] args) {
	 
		Scanner sc = new Scanner(System.in);
		
		// Prompting user to enter a sentence 
		System.out.print("Enter a sentence: ");
		String sentence = sc.nextLine();
		
		try{
			
			// Prompting the user to ente the starting possition
			
			System.out.print("Enter the starting index(possition): ");
			int startIndex = sc.nextInt();
			
			// Prompting the user to ente the ending possition
			
			System.out.print("Enter the ending index(possition): ");
			int endIndex = sc.nextInt();
			
			if(startIndex < 0 || endIndex >= sentence.length() || startIndex > endIndex){
				System.out.println("Invalid index. Please ensure 0 <= start <= end < sentence length.");
			}else{
				String extracted = sentence.substring(startIndex, endIndex + 1);
				
				System.out.println("Extracted portion: "+extracted);
			}
			
		}catch(Exception e)
		{
			System.out.println("Ente only numbers!!!");
		}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	};
}