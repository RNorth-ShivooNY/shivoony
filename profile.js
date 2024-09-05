    window.onload = function() {
      Outseta.getUser().then((profile) => {
  
        var email = profile.Email;
        var firstName = profile.FirstName;
        var lastName = profile.LastName;
        var prefillLink = "https://shivoony.com/join-staff-form?email=" + email + "&firstName="+firstName+"&lastName=" + lastName + "&utm_campaign=" + getCookie("utm_campaign");
        var profileLink = document.getElementById("staff-profile-link");
        var editButton = document.getElementById("profile-edit-button");
        var profileInstructions = document.getElementById("profileInstructions");

        if (profileLink.href === "" || profileLink.href === "https://shivoony.com/undefined") {
            profileLink.href = prefillLink;
        }

        if (editButton.href === "" || editButton.href === "https://shivoony.com/undefined") {
            editButton.href = prefillLink;

        }
  });
    }
