package com.advice.adviceapp_server.controller;


import com.advice.adviceapp_server.exception.ResourceNotFoundException;
import com.advice.adviceapp_server.model.Review;
import com.advice.adviceapp_server.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.List;

@RestController

public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    // get all reviews
    @GetMapping("/review")
    public List<Review> getAllReview(Model model) {
        return this.reviewRepository.findAll();
    }

    //get reviews by id
    @GetMapping("/reviews/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable(value = "id") Long reviewId)
        throws ResourceNotFoundException {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException()"Review not found" + reviewId)
                return ResponseEntity.ok().body(review);
    }

    //post reviews
    @PostMapping("/review")
    public Review createReview(@Valid @RequestBody Review review) {
        return reviewRepository.save(review);
    }
}
