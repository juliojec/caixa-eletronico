package br.com.brasilprev.cadastro.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brasilprev.cadastro.model.Beneficiario;
import br.com.brasilprev.cadastro.repository.BeneficiarioRepository;
import br.com.brasilprev.cadastro.vo.AporteVO;

@Service
public class BeneficiarioService {
	
	@Autowired
	BeneficiarioRepository beneficiarioRepository;
	
	public Beneficiario salvar(Beneficiario beneficiario) {
		Optional<Beneficiario> beneficiarioDb = findByCpf(onlyNumber(beneficiario.getCpf()));
		beneficiario.setCpf(onlyNumber(beneficiario.getCpf()));
		
		if(beneficiarioDb.isPresent()) {
			beneficiarioDb.get().setNome(beneficiario.getNome());
			beneficiarioDb.get().setEmail(beneficiario.getEmail());
			beneficiarioDb.get().setSaldoAposentadoria(beneficiario.getSaldoAposentadoria());
			beneficiarioDb.get().setAnosAposentadoria(beneficiario.getAnosAposentadoria());
		}
		
		return beneficiarioRepository.save(beneficiarioDb.isPresent() ? beneficiarioDb.get() : beneficiario);
	}
	
	public Optional<Beneficiario> findByCpf(String cpf) {
		Optional<Beneficiario> beneficiario = beneficiarioRepository.findByCpf(onlyNumber(cpf));
		
		if(beneficiario.isPresent()) {
			Integer meses = beneficiario.get().getAnosAposentadoria() * 12;
			beneficiario.get().setReceber(beneficiario.get().getSaldoAposentadoria().divide(BigDecimal.valueOf(meses), 2, RoundingMode.HALF_UP));
		}
		
		return beneficiario;
	}
	
	public void aporte(AporteVO aporte) {
		Optional<Beneficiario> beneficiarioDb = findByCpf(onlyNumber(aporte.getCpf()));
		
		if(beneficiarioDb.isPresent()) {
			Beneficiario beneficiario = beneficiarioDb.get();
			beneficiario.setSaldoAposentadoria(beneficiario.getSaldoAposentadoria().add(aporte.getAporte()));
			beneficiarioRepository.save(beneficiario);
		}
	}
	
	public static String onlyNumber(String data) {
		return data.replaceAll("[^0-9]", "");
	}
}
