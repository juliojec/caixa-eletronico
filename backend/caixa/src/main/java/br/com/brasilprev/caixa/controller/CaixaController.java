package br.com.brasilprev.caixa.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.brasilprev.caixa.CaixaProducer;

@RestController
@RequestMapping(value = "/caixa")
public class CaixaController {

    private final CaixaProducer caixaProducer;

    public CaixaController(CaixaProducer caixaProducer) {
        this.caixaProducer = caixaProducer;
    }

    @RequestMapping(path = "/aporte", method = RequestMethod.POST)
    public void send(@RequestBody String aporte) {
    	caixaProducer.send(aporte);
    }
}
