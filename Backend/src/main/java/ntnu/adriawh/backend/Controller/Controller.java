package ntnu.adriawh.backend.Controller;

import ntnu.adriawh.backend.Model.*;
import ntnu.adriawh.backend.Service.CalculationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping("v1")
public class Controller {

    @Autowired
    private CalculationService calculationService;

    @Autowired
    CalculationRepository calculationRepository;

    @Autowired
    UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(Controller.class);

    @PostMapping  ("/user/calculate")
    public Calculation PostCalculationWithUser(@RequestBody Calculation object, Authentication authentication) {

        logger.info("Calculation recieved: " + object.getCalculation());
        calculationService.calculate(object);
        if(object.getAnswer() == null){
            logger.info("The calculation led to an error");
            return object;
        }
        logger.info("Answer calculated: " + object.getAnswer());

        if(authentication.isAuthenticated()){
            object.setIdUser(userRepository.findByUsername(authentication.getName()).getIdUser());
            calculationRepository.save(object);
        }

        return object;
    }
    @PostMapping  ("/calculate")
    public Calculation PostCalculation(@RequestBody Calculation object) {

        logger.info("Calculation recieved: " + object.getCalculation());
        calculationService.calculate(object);
        if(object.getAnswer() == null){
            logger.info("The calculation led to an error");
            return object;
        }
        logger.info("Answer calculated: " + object.getAnswer());

        return object;
    }

    @GetMapping ("/getCalculations")
    public ArrayList<String> getCalculations(Authentication authentication){
        int userId = userRepository.findByUsername(authentication.getName()).getIdUser();
        List<Calculation> calculations = calculationRepository.findAllByidUser(userId);

        ArrayList<String> stringList = new ArrayList<>();
        for(Calculation c : calculations){
            stringList.add(c.getCalculation() + "=" + c.getAnswer());
        }

        return stringList;

    }


}
