package br.com.brasilprev.cadastro.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brasilprev.cadastro.model.Beneficiario;
import br.com.brasilprev.cadastro.service.BeneficiarioService;
import br.com.brasilprev.cadastro.vo.AporteVO;

@RestController
@RequestMapping("/beneficiario")
public class BeneficiarioController {
	
	@Autowired
	BeneficiarioService beneficiarioService;
    
    @PostMapping(path = "/cadastro")
    @ResponseBody
    public ResponseEntity<?> cadastro(@RequestBody Beneficiario beneficiario) {
    	beneficiario = beneficiarioService.salvar(beneficiario);
        return ResponseEntity.ok().body(beneficiario);
    }
    
    @PostMapping(path="/consulta")
    @ResponseBody
    public ResponseEntity<?> findByCpf(@RequestBody AporteVO consulta) throws JSONException {
    	Optional<Beneficiario> beneficiario = beneficiarioService.findByCpf(consulta.getCpf());
    	
    	if(!beneficiario.isPresent()) {
    		return ResponseEntity.badRequest().body("CPF não cadastrado em nosso sistema");
    	}
    	
        return ResponseEntity.ok().body(beneficiario.get());
    }
	
}
