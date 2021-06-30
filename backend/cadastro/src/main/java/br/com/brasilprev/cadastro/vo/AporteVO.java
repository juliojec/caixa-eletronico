package br.com.brasilprev.cadastro.vo;

import java.math.BigDecimal;

public class AporteVO {
	
	private String cpf;
	
	private BigDecimal aporte;

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public BigDecimal getAporte() {
		return aporte;
	}

	public void setAporte(BigDecimal aporte) {
		this.aporte = aporte;
	}
	
}
