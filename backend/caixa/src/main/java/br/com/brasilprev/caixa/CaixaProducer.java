package br.com.brasilprev.caixa;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

@Component
public class CaixaProducer {

    @Value("${beneficiario.aporte.topic}")
    private String beneficiarioAporteTopic;

    private final KafkaTemplate<String, String> kafkaTemplate;

    public CaixaProducer(final KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void send(final @RequestBody String aporte) {
        final String mensageKey = UUID.randomUUID().toString();
        kafkaTemplate.send(beneficiarioAporteTopic, mensageKey,  aporte);
    }

}
