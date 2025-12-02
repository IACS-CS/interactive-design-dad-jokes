console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.

// AI-generated code starts here
// Student prompt was: Create an interactive dropdown menu that opens
// and closes when you click a button, with clickable options inside

// Get the button that opens/closes the dropdown menu
let dropdownButton = document.querySelector("#dropdown-button");
// Get the menu that will show/hide
let dropdownMenu = document.querySelector("#dropdown-menu");

// When the user clicks the button, toggle (show/hide) the dropdown menu
dropdownButton.addEventListener("click", function () {
  // The "show" class makes the menu visible
  // This toggles the class on and off with each click
  dropdownMenu.classList.toggle("show");
});

// When the user clicks on a dropdown option (any item inside the menu)
let dropdownItems = document.querySelectorAll(".dropdown-item");
// Loop through each dropdown item
for (let i = 0; i < dropdownItems.length; i++) {
  // For each item, add a click listener
  dropdownItems[i].addEventListener("click", function (event) {
    // Prevent the link from actually going somewhere (the # URL)
    event.preventDefault();
    // Get the text of what was clicked (e.g., "Option 1")
    let selectedText = this.textContent;
    // Show in the console what was clicked (helps us debug)
    console.log("You selected: " + selectedText);
    // Hide the menu after clicking an option
    dropdownMenu.classList.remove("show");
    // Update the button text to show what was selected
    dropdownButton.textContent = selectedText + " ▼";

    // AI-generated code for Option 1 special effect starts here
    // Student prompt was: Make Option 1 play a click sound and animate
    // "Wrong Choice" text across the bottom of the screen
    // Check if the user clicked on "Option 1"
    if (selectedText === "Option 1") {
      // Create a sound effect using the Web Audio API (built into browsers)
      // We create an audio context and make a beeping sound
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      // Create an oscillator (sound wave generator)
      let oscillator = audioContext.createOscillator();
      // Create a volume control
      let gainNode = audioContext.createGain();
      // Connect the oscillator to the volume control, then to speakers
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Set sound properties
      oscillator.frequency.value = 400; // The pitch of the sound (in Hz)
      oscillator.type = "sine"; // Type of sound wave
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime); // Volume level
      // Fade out the sound to make it sound nicer
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      // Play the sound
      oscillator.start(audioContext.currentTime); // Start now
      oscillator.stop(audioContext.currentTime + 0.1); // Stop after 0.1 seconds

      // Now trigger the "Wrong Choice" animation
      // Get the element that contains the "Wrong Choice" text
      let wrongChoiceElement = document.querySelector("#wrong-choice-text");
      // Add the "animate" class to start the animation
      wrongChoiceElement.classList.add("animate");

      // After the animation is done (2 seconds), remove the class
      // so we can play it again next time
      setTimeout(function () {
        wrongChoiceElement.classList.remove("animate");
      }, 2000);
    }
    // AI-generated code for Option 1 special effect ends here

    // AI-generated code for Option 2 special effect starts here
    // Student prompt was: Make Option 2 play a click sound and display
    // ASCII art of a Bowline knot with explanation
    if (selectedText === "Option 2") {
      // Create the same click sound as Option 1
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      let oscillator = audioContext.createOscillator();
      let gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 400; // Same 400Hz pitch
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);

      // Show the Bowline knot information
      let bowlineContent = document.querySelector("#bowline-content");
      // Remove the "hidden" class to make it visible
      bowlineContent.classList.remove("hidden");
      // Scroll to the top so the user can see the content
      window.scrollTo(0, 0);
    }
    // AI-generated code for Option 2 special effect ends here

    // AI-generated code for Option 3 special effect starts here
    // Student prompt was: Make Option 3 play a click sound and display
    // ASCII art of a Buntline knot with explanation
    if (selectedText === "Option 3") {
      // Create the same click sound
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      let oscillator = audioContext.createOscillator();
      let gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 400; // Same 400Hz pitch
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);

      // Show the Buntline knot information
      let buntlineContent = document.querySelector("#buntline-content");
      // Remove the "hidden" class to make it visible
      buntlineContent.classList.remove("hidden");
      // Scroll to the top so the user can see the content
      window.scrollTo(0, 0);
    }
    // AI-generated code for Option 3 special effect ends here
  });
}

// If user clicks outside the dropdown, close it
document.addEventListener("click", function (event) {
  // Check if the click is NOT on the button and NOT on the menu
  if (
    event.target !== dropdownButton &&
    !dropdownMenu.contains(event.target)
  ) {
    // If so, remove the "show" class to hide the menu
    dropdownMenu.classList.remove("show");
  }
});
// AI-generated code ends here

// AI-generated code for Option 2 close button starts here
// Get the close button for the Bowline content
let closeBowlineButton = document.querySelector("#close-bowline");
// When the user clicks the close button
closeBowlineButton.addEventListener("click", function () {
  // Get the Bowline content area
  let bowlineContent = document.querySelector("#bowline-content");
  // Add the "hidden" class to hide it
  bowlineContent.classList.add("hidden");
});
// AI-generated code for Option 2 close button ends here

// AI-generated code for Option 3 close button starts here
// Get the close button for the Buntline content
let closeBuntlineButton = document.querySelector("#close-buntline");
// When the user clicks the close button
closeBuntlineButton.addEventListener("click", function () {
  // Get the Buntline content area
  let buntlineContent = document.querySelector("#buntline-content");
  // Add the "hidden" class to hide it
  buntlineContent.classList.add("hidden");
});
// AI-generated code for Option 3 close button ends here
