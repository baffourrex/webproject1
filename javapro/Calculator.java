import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Calculator {

    public static void main(String[] args) {
        ImageIcon icon = new ImageIcon("eklipse.jpg");

        // Create frame
        JFrame frame = new JFrame("Simple Calculator System");
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new GridBagLayout());
        frame.setIconImage(icon.getImage());
        GridBagConstraints c = new GridBagConstraints();
    

        // Create components
        JLabel lblFirstNumber = new JLabel("First Number");
        JTextField txtFirstNumber = new JTextField(10);
        JLabel lblSecondNumber = new JLabel("Second Number");
        JTextField txtSecondNumber = new JTextField(10);
        JLabel lblResult = new JLabel("Result");
        JTextField txtResult = new JTextField(10);
        txtResult.setEditable(true);
    

        JRadioButton rbtnAdd = new JRadioButton("Add");
        JRadioButton rbtnSubtract = new JRadioButton("Subtract");
        JRadioButton rbtnMultiply = new JRadioButton("Multiply");
        JRadioButton rbtnDivide = new JRadioButton("Divide");
        ButtonGroup group = new ButtonGroup();
        group.add(rbtnAdd);
        group.add(rbtnSubtract);
        group.add(rbtnMultiply);
        group.add(rbtnDivide);

        JButton btnClear = new JButton("Clear");
        JButton btnCalculate = new JButton("Calculate");
        JButton btnEnd = new JButton("End");

        // Set up layout
        c.insets = new Insets(5, 5, 5, 5);
        c.gridx = 0; c.gridy = 0; frame.add(lblFirstNumber, c);
        c.gridx = 1; c.gridy = 0; frame.add(txtFirstNumber, c);
        c.gridx = 0; c.gridy = 1; frame.add(lblSecondNumber, c);
        c.gridx = 1; c.gridy = 1; frame.add(txtSecondNumber, c);
        c.gridx = 0; c.gridy = 2; frame.add(lblResult, c);
        c.gridx = 1; c.gridy = 2; frame.add(txtResult, c);

        JPanel panel = new JPanel();
        panel.setBorder(BorderFactory.createTitledBorder(""));
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.add(rbtnAdd);
        panel.add(rbtnSubtract);
        panel.add(rbtnMultiply);
        panel.add(rbtnDivide);

        c.gridx = 2; c.gridy = 0; c.gridheight = 3; frame.add(panel, c);
        c.gridheight = 1;

        c.gridx = 0; c.gridy = 3; frame.add(btnClear, c);
        c.gridx = 1; c.gridy = 3; frame.add(btnCalculate, c);
        c.gridx = 2; c.gridy = 3; frame.add(btnEnd, c);

        // Add action listeners
        btnCalculate.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double num1 = Double.parseDouble(txtFirstNumber.getText());
                    double num2 = Double.parseDouble(txtSecondNumber.getText());
                    double result = 0;
                    if (rbtnAdd.isSelected()) {
                        result = num1 + num2;
                    } else if (rbtnSubtract.isSelected()) {
                        result = num1 - num2;
                    } else if (rbtnMultiply.isSelected()) {
                        result = num1 * num2;
                    } else if (rbtnDivide.isSelected()) {
                        result = num1 / num2;
                    }
                    txtResult.setText(String.valueOf(result));
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Please enter valid numbers", "Input Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        btnClear.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                txtFirstNumber.setText("");
                txtSecondNumber.setText("");
                txtResult.setText("");
                group.clearSelection();
            }
        });

        btnEnd.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        // Show frame
        frame.setVisible(true);
    }
}