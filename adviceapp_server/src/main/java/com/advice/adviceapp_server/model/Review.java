package com.advice.adviceapp_server.model;
import javax.persistence.*;

@Entity
@Table (name = "user_reviews")

public class Review {
    @Id
    @GeneratedValue
    @Column(name = "review_id")
    private long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "review_message")
    private String review;

    public Review() {
        super();
    }

    public Review(String review, String userName) {
        super();
        this.userName = userName;
        this.review = review;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}