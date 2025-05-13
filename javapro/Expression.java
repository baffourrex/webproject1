// y = 2/(3+x) iff x != -3
import java.util.Scanner;
public class Expression{
	public static void main (String[]args){
	try{
		// declaration section
		double x, y;
		Scanner Sc = new Scanner(System.in);
		//input section
		System.out.println("Enter a value for x:");
		x = Sc.nextDouble();
		//processing section
		if (x !=-3){//checking that x is not equal to -3
		    y = 2 /(3+x);
		    System.out.println("y="+y);
		}else{	
		    System.out.println("Please do not enter -3");
		

		}
}  catch(Exception e){
	System.out.println("Please enter numbers only");
}
	}
