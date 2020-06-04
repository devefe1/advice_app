package com.advice.adviceapp_server.controller;


import com.advice.adviceapp_server.exception.ResourceNotFoundException;
import com.advice.adviceapp_server.model.Advice;
import com.advice.adviceapp_server.repository.AdviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AdviceController {
    @Autowired
    private AdviceRepository adviceRepository;

    //get all advice
    @GetMapping("/advice")
    public List<Advice> getAllAdvice(Model model) { return this.adviceRepository.findAll(); }


    // save advice
    @PostMapping("/advice")
    public Advice saveAdvice(@Valid @RequestBody Advice advice) {
        return adviceRepository.save(advice);
    }


    // delete advice
    @DeleteMapping("/advice{id}")
    public Map<String, Boolean> deletedAdvice(@PathVariable(value = "id") Long adviceId)
            throws ResourceNotFoundException {
        Advice advice = adviceRepository.findById(adviceId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found " + adviceId));

        adviceRepository.delete(advice);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted Advice", Boolean.TRUE);
        return response;

    }

}
