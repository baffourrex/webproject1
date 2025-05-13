import java.util.Scanner;
public class Sphere{
	public static void main(String[]args){
		try{
			Scanner sc=new Scanner(System.in);
		double v, r, h;
		
		System.out.println("Enter a value for r;");
		r=sc.nextDouble();
		System.out.println("Enter a value for h;");
		h=sc.nextDouble();
		
		
		
		v=(4/3)*Math.pow(r,3)*h;
		System.out.print("v="+v);
		}catch(Exception e){
			System.out.println("Enter only numbers");
		}
		
	}
}