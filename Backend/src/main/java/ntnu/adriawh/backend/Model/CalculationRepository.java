package ntnu.adriawh.backend.Model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CalculationRepository extends JpaRepository<Calculation, Long> {

    List<Calculation> findAllByidUser( int id_user);

}