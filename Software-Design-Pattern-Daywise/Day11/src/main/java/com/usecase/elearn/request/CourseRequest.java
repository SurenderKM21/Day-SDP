package com.usecase.elearn.request;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseRequest {
    private String title;
    private String syllabus;
    private String difficultyLevel;
    private String category;
    private String prerequisites;
    private String schedule;
}
