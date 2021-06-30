package br.com.brasilprev.cadastro.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import br.com.brasilprev.cadastro.model.Beneficiario;

public interface BeneficiarioRepository extends CrudRepository<Beneficiario, Integer> {

	Optional<Beneficiario> findByCpf(String cpf);
	
}