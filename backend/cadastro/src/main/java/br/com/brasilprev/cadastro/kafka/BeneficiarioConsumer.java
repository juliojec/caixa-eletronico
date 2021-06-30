package br.com.brasilprev.cadastro.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.brasilprev.cadastro.service.BeneficiarioService;
import br.com.brasilprev.cadastro.vo.AporteVO;

@Component
public class BeneficiarioConsumer {
	
	final static Logger logger = LoggerFactory.getLogger(BeneficiarioConsumer.class);
	
	@Autowired
	BeneficiarioService beneficiarioService;

    @KafkaListener(topics = "${beneficiario.aporte.topic}", groupId = "${spring.kafka.consumer.group-id}")
    public void consumer(final ConsumerRecord<String, String> consumerRecord) throws Exception {
    	logger.info("key: " + consumerRecord.key());
    	logger.info("Headers: " + consumerRecord.headers());
    	logger.info("Partion: " + consumerRecord.partition());
        logger.info("Beneficiario aporte: " + consumerRecord.value());
        
        ObjectMapper objectMapper = new ObjectMapper();
        AporteVO aporteVO = objectMapper.readValue(consumerRecord.value(), AporteVO.class);	
        
        beneficiarioService.aporte(aporteVO);
    }
}