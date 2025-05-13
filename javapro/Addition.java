import java.util.Scanner;
public class Addition{
	public static void main(String[]args){
		try{
			Scanner sc=new Scanner(System.in);
		int y, x;
		System.out.println("Enter a value for x;");
		x=sc.nextInt();
		y=2*x;
		System.out.println("y="+y);
		}catch(Exception e){
			System.out.println("Enter only numbers");
		}
	
	}
}