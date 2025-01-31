$(document).ready(function () {
    const person = { name: "Panthee Patel", age: 20, college: "LJ" };

    // 1. Using $.ajax() (Complete control over settings)
    $("#btn-ajax").click(function () {
        $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            success: function (response) {
                $("#response").text(JSON.stringify(response, null, 2));
            },
            error: function () {
                alert("Error fetching data.");
            }
        });
    });

    // 2. Using $.get() (Shortcut for GET requests)
    $("#btn-get").click(function () {
        $.get("data.json", function (response) {
            $("#response").text(JSON.stringify(response, null, 2));
        }).fail(function () {
            alert("GET request failed.");
        });
    });

    // 3. Using $.post() (Shortcut for POST requests) -- will give error as server is not setup
    $("#btn-post").click(function () {
        $.post("data.json", person, function (response) {
            $("#response").text("Data sent! (Check console)");
            console.log("Response:", response);
        }).fail(function () {
            alert("POST request failed.");
        });
    });

    // 4. Using .load() (Load HTML content into a div)
    $("#btn-load").click(function () {
        $("#content").load("test.html", function (response, status) {
            if (status !== "success") {
                alert("Failed to load content.");
            }
        });
    });

    // 5. Using $.getJSON() (Fetch JSON without extra settings)
    $("#btn-json").click(function () {
        $.getJSON("data.json", function (response) {
            $("#response").text(JSON.stringify(response, null, 2));
        }).fail(function () {
            alert("Failed to load JSON.");
        });
    });

    // 6. Using .serialize() to Send Form Data
    $("#btn-submit").click(function () {
        let formData = $("#userForm").serialize();
        $.post("data.json", formData, function (response) {
            $("#response").text("Form data sent! (Check console)");
            console.log("Response:", response);
        }).fail(function () {
            alert("Form submission failed.");
        });
    });

    // localStorage.setItem("username", "panthee patel");

    // css and selection
    $("input[name='username']").val("enter username");
    $("input[name='username']").focus();
    $("input[type='checkbox']#1").prop("checked", true);
    $("input[type='checkbox']#2").prop("disabled", true);
    $("#fname").focus(function () {
        $(this).css("border", "2px solid blue");
    });

    $("#age").blur(function () {
        $(this).css("border", "1px solid pink");
    });


    // validations
    $("#myForm").submit(function (e) {
        e.preventDefault();

        let email = $("#email").val();
        if (!email) {
            alert("Email is required");
        }
        else if (!validateEmail(email)) {
            alert("Invalid email format");
        }
        else {
            console.log("Form submitted");
        }
    });

    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
    $("input:required").each(function () {
        if (!$(this).val()) {
            $(this).next("span").text("This field is required.");
        }
    });


});
