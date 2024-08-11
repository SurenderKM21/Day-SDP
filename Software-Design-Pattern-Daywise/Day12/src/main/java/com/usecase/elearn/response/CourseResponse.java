package com.usecase.elearn.response;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseResponse {
    private int id;
    private String title;
    private String syllabus;
    private String difficultyLevel;
    private String category;
    private String prerequisites;
    private String schedule;
}
