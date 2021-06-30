package br.com.brasilprev.cadastro.model;


import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "beneficiario")
public class Beneficiario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="nome")
    private String nome;
    
	@Column(name="cpf")
    private String cpf;
	
	@Column(name="email")
    private String email;
    
    @Column(name="saldo")
    private BigDecimal saldoAposentadoria;
    
    @Column(name="anos_aposentadoria")
    private Integer anosAposentadoria;
    
    @Transient
    private BigDecimal receber;
    
	public BigDecimal getReceber() {
		return receber;
	}
	public void setReceber(BigDecimal receber) {
		this.receber = receber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public BigDecimal getSaldoAposentadoria() {
		return saldoAposentadoria;
	}
	public void setSaldoAposentadoria(BigDecimal saldoAposentadoria) {
		this.saldoAposentadoria = saldoAposentadoria;
	}
	public Integer getAnosAposentadoria() {
		return anosAposentadoria;
	}
	public void setAnosAposentadoria(Integer anosAposentadoria) {
		this.anosAposentadoria = anosAposentadoria;
	}
    
}
