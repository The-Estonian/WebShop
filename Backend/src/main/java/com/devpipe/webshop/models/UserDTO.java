package com.devpipe.webshop.models;

public class UserDTO {
    private String email;

    public UserDTO(String email) {
        this.email = email;
    }

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
