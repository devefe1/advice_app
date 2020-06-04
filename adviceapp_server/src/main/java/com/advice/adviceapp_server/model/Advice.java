package com.advice.adviceapp_server.model;

@Entity
@Table (name = "saved_advice")

public class Advice {
    @Id
    @GeneratedValue
    @Column(name = "advice_id")
    private long id;

    @Column (name = "advices")
    private String advices;

    public Advice() {
        super();
    }

    public Advice(String advices) {
        super();
        this.advices = advices;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAdvice() {
        return advices;
    }

    public void setAdvice(String advice) {
        this.advices = advices;
    }
}