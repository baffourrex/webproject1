import java.util.Scanner;
public class Question1{
	
	public static void main(String[] args){
		
		try{
			
			Scanner sc = new Scanner(System.in);
			//Declaring variables 
			double sales,commission;
			
			//Taking input for sales
			System.out.print("Enter the amount of sales made: ");
			sales = sc.nextDouble();
			
			// using Statement to assign commission to each sales made by the salesperson
			if(sales <200 && sales>=0){
				 commission = sales * 0.1;
				System.out.println("You earned a  commission of "+commission+ " cedis.");
			}else if(sales > 200 && sales < 800){
				commission = sales * 0.15;
				System.out.println("You earned a  commission of "+commission+ " cedis.");
			}else if(sales >800){
				commission = sales * 0.2;
				System.out.println("You earned a  commission of "+commission+ " cedis.");
			}else if(sales <=0){
				System.out.println("Please do not enter zero or a negative number enter  ");
			}else{
				System.out.println("Please you do not have a commission on 200 cedis or 800 cedis ");
			} 

			
		}catch(Exception e)
		{
				System.out.println("Enter only numbers!");
		}
	};
}