function showFindSkill() {

    const section = document.getElementById("skill-section");

    if (section.style.display === "none" || section.style.display === "") {

        section.style.display = "block";

    } else {

        section.style.display = "none";

    }

}

function showShareSkill() {

    alert("Share Your Skill feature coming soon!");

}

function searchSkill() {

    const skill = document.getElementById("skillInput").value;

    const results = document.getElementById("results");

    if (skill.trim() === "") {

        results.innerHTML = "<p>Please enter a skill to search.</p>";

        return;

    }

    results.innerHTML = `

        <div class="student">

            <strong>Students who can teach ${skill}</strong>

            <p>Student matching feature coming soon.</p>

        </div>

    `;

}