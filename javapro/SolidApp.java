
import java.util.Scanner;

public class SolidApp{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Prompt the user to choose a solid figure
            System.out.println("Choose a solid figure (cube, cone, cylinder, sphere): ");
            String figure = scanner.nextLine().toLowerCase();

            // Prompt the user to choose a calculation type
            System.out.println("Choose a calculation (surface area or volume): ");
            String calculation = scanner.nextLine().toLowerCase();

            // Use switch statement to handle  the different figures
            switch (figure) {
                case "cube":
                    // For cube, ask the user to enter  side length
                    System.out.print("Enter the side length of the cube: ");
                    double side = scanner.nextDouble();
                    if (calculation.equals("surface area")) {
                        // Calculate surface area of cube
                        double surfaceArea = 6 * Math.pow(side, 2);
                        System.out.println("Surface area of the cube: " + surfaceArea);
                    } else if (calculation.equals("volume")) {
                        // Calculate volume of cube
                        double volume = Math.pow(side, 3);
                        System.out.println("Volume of the cube: " + volume);
                    } else {
                        System.out.println("Invalid calculation type.");
                    }
                    break;

                case "cone":
                    // For cone, ask for radius and height
                    System.out.print("Enter the radius of the cone: ");
                    double radiusCone = scanner.nextDouble();
                    System.out.print("Enter the height of the cone: ");
                    double heightCone = scanner.nextDouble();
                    if (calculation.equals("surface area")) {
                        // Calculate slant height
                        double slantHeight = Math.sqrt(Math.pow(radiusCone, 2) + Math.pow(heightCone, 2));
                        // Calculate surface area of cone
                        double surfaceArea = Math.PI * radiusCone * (radiusCone + slantHeight);
                        System.out.println("Surface area of the cone: " + surfaceArea);
                    } else if (calculation.equals("volume")) {
                        // Calculate volume of cone
                        double volume = (1.0 / 3) * Math.PI * Math.pow(radiusCone, 2) * heightCone;
                        System.out.println("Volume of the cone: " + volume);
                    } else {
                        System.out.println("Invalid calculation type.");
                    }
                    break;

                case "cylinder":
                    // For cylinder, ask for radius and height
                    System.out.print("Enter the radius of the cylinder: ");
                    double radiusCylinder = scanner.nextDouble();
                    System.out.print("Enter the height of the cylinder: ");
                    double heightCylinder = scanner.nextDouble();
                    if (calculation.equals("surface area")) {
                        // Calculate surface area of cylinder
                        double surfaceArea = 2 * Math.PI * radiusCylinder * (radiusCylinder + heightCylinder);
                        System.out.println("Surface area of the cylinder: " + surfaceArea);
                    } else if (calculation.equals("volume")) {
                        // Calculate volume of cylinder
                        double volume = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;
                        System.out.println("Volume of the cylinder: " + volume);
                    } else {
                        System.out.println("Invalid calculation type.");
                    }
                    break;

                case "sphere":
                    // For sphere, ask for radius
                    System.out.print("Enter the radius of the sphere: ");
                    double radiusSphere = scanner.nextDouble();
                    if (calculation.equals("surface area")) {
                        // Calculate surface area of sphere
                        double surfaceArea = 4 * Math.PI * Math.pow(radiusSphere, 2);
                        System.out.println("Surface area of the sphere: " + surfaceArea);
                    } else if (calculation.equals("volume")) {
                        // Calculate volume of sphere
                        double volume = (4.0 / 3) * Math.PI * Math.pow(radiusSphere, 3);
                        System.out.println("Volume of the sphere: " + volume);
                    } else {
                        System.out.println("Invalid calculation type.");
                    }
                    break;

                default:
                    System.out.println("Invalid solid figure.");
                    break;
            }
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter numeric values for dimensions.");
        } 
    }
}
