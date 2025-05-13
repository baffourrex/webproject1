

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class C2 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Simple Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 400);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 4));

        JTextField textField = new JTextField();
        textField.setEditable(false);

        JButton[] numberButtons = new JButton[10];
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            int number = i;
            numberButtons[i].addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    textField.setText(textField.getText() + number);
                }
            });
            panel.add(numberButtons[i]);
        }

        JButton addButton = new JButton("+");
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                textField.setText(textField.getText() + "+");
            }
        });
        panel.add(addButton);

        JButton subtractButton = new JButton("-");
        subtractButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                textField.setText(textField.getText() + "-");
            }
        });
        panel.add(subtractButton);

        JButton equalsButton = new JButton("=");
        equalsButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String expression = textField.getText();
                String[] parts = expression.split("[+-]");
                int result = 0;
                if (expression.contains("+")) {
                    result = Integer.parseInt(parts[0]) + Integer.parseInt(parts[1]);
                } else if (expression.contains("-")) {
                    result = Integer.parseInt(parts[0]) - Integer.parseInt(parts[1]);
                }
                textField.setText(String.valueOf(result));
            }
        });
        panel.add(equalsButton);

        frame.add(textField, BorderLayout.NORTH);
        frame.add(panel, BorderLayout.CENTER);
        frame.setVisible(true);
    }
}


