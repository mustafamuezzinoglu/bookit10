$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createStudent.feature");
formatter.feature({
  "name": "Create Student",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create student a teacher and verify status code 201",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I logged Bookit api using \"blyst6@si.edu\" and \"barbabaslyst\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.i_logged_Bookit_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send POST request to \"/api/students/student\" endpoint with following information",
  "rows": [
    {
      "cells": [
        "first-name",
        "harold"
      ]
    },
    {
      "cells": [
        "last-name",
        "finch"
      ]
    },
    {
      "cells": [
        "email",
        "haroldddd@gmail.com"
      ]
    },
    {
      "cells": [
        "password",
        "abc123"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-leader"
      ]
    },
    {
      "cells": [
        "campus-location",
        "VA"
      ]
    },
    {
      "cells": [
        "batch-number",
        "8"
      ]
    },
    {
      "cells": [
        "team-name",
        "Nukes"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDefs.i_send_POST_request_to_endpoint_with_following_information(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c422\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.bookit.step_definitions.ApiStepDefs.status_code_should_be(ApiStepDefs.java:46)\r\n\tat ✽.status code should be 201(file:src/test/resources/features/createStudent.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});