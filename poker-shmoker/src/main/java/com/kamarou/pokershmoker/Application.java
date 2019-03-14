package com.kamarou.pokershmoker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.kamarou.pokershmoker")
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class);
  }
}
