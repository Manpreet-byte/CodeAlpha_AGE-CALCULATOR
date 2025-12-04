/**
 * Age Calculator – script.js
 * Calculates age in years, months, and days from a user-supplied date of birth.
 */

(function () {
  "use strict";

  // ===== DOM Elements =====
  const form = document.getElementById("ageForm");
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const errorEl = document.getElementById("error");
  const resultEl = document.getElementById("result");
  const clearBtn = document.getElementById("clearBtn");

  // ===== Helpers =====

  /**
   * Returns true if the given year is a leap year.
   */
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Returns the number of days in a given month (1-indexed).
   */
  function daysInMonth(month, year) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) return 29;
    return days[month - 1];
  }

  /**
   * Validates the input values.
   * Returns an error message or null if valid.
   */
  function validateInputs(day, month, year) {
    const today = new Date();

    if (!day || !month || !year) {
      return "Please fill in all fields.";
    }

    if (month < 1 || month > 12) {
      return "Month must be between 1 and 12.";
    }

    const maxDay = daysInMonth(month, year);
    if (day < 1 || day > maxDay) {
      return `Day must be between 1 and ${maxDay} for the selected month.`;
    }

    if (year < 1900 || year > today.getFullYear()) {
      return `Year must be between 1900 and ${today.getFullYear()}.`;
    }

    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) {
      return "Birth date cannot be in the future.";
    }

    return null;
  }

  /**
   * Calculates age from birth date to today.
   * Returns { years, months, days }.
   */
  function calculateAge(day, month, year) {
    const today = new Date();
    let years = today.getFullYear() - year;
    let months = today.getMonth() + 1 - month;
    let days = today.getDate() - day;

    // Borrow from months if days are negative
    if (days < 0) {
      months -= 1;
      // Days in the previous month (relative to today)
      const prevMonth = today.getMonth() === 0 ? 12 : today.getMonth();
      const prevMonthYear =
        today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();
      days += daysInMonth(prevMonth, prevMonthYear);
    }

    // Borrow from years if months are negative
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }

  /**
   * Renders the result in the #result element.
   */
  function renderResult({ years, months, days }) {
    resultEl.innerHTML = `
      <div class="age-display">
        <div class="age-box">
          <div class="value">${years}</div>
          <div class="label">Years</div>
        </div>
        <div class="age-box">
          <div class="value">${months}</div>
          <div class="label">Months</div>
        </div>
        <div class="age-box">
          <div class="value">${days}</div>
          <div class="label">Days</div>
        </div>
      </div>
    `;
  }

  /**
   * Clears error, result, and input fields.
   */
  function clearAll() {
    errorEl.textContent = "";
    resultEl.innerHTML = "";
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    dayInput.focus();
  }

  // ===== Event Listeners =====

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    const error = validateInputs(day, month, year);
    if (error) {
      errorEl.textContent = error;
      resultEl.innerHTML = "";
      return;
    }

    errorEl.textContent = "";
    const age = calculateAge(day, month, year);
    renderResult(age);
  });

  clearBtn.addEventListener("click", clearAll);
})();
