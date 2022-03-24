package ntnu.adriawh.backend.Service;


import ntnu.adriawh.backend.Model.Calculation;
import org.springframework.stereotype.Service;

@Service
public class CalculationService {

    public void calculate(Calculation cal){

        String[] equation = cal.getCalculation().split("(?<=\\d)(?=\\D)|(?<=\\D)(?=\\d)");
        if(equation.length != 3){
            return;
        }
        int a = Integer.parseInt(equation[0]);
        int b = Integer.parseInt(equation[2]);
        int answer=0;
        String operator = equation[1];

        switch (operator){
            case "+":
                answer = a + b;
                break;
            case "-":
                answer = a - b;
                break;
            case"*":
                answer = a * b;
                break;
            case"/":
                answer = a / b;
                break;
            default:
        }
        cal.setAnswer(String.valueOf(answer));
    }
}
