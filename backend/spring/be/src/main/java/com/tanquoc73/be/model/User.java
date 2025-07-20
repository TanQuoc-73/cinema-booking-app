package com.tanquoc73.be.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    private UUID userId;

    private String email;

    @Column(name = "full_name")
    private String fullName;

    // Các trường khác có thể thêm sau

    // Getters and setters
}
