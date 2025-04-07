$(document).ready(function() {
	

	
	$("#touchSlider10").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider10_wrap").next(),
		btn_next : $(".touchSlider10_wrap").next()
	});

	$("#touchSlider11").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider11_wrap").next(),
		btn_next : $(".touchSlider11_wrap").next()
	});

	$("#touchSlider12").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider12_wrap").next(),
		btn_next : $(".touchSlider12_wrap").next()
	});

	$("#touchSlider13").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider13_wrap").next(),
		btn_next : $(".touchSlider13_wrap").next()
	});
	


	let currentIndex = 0;
      const slides = $('#slides img');
      const slideCount = slides.length;

      function showNextSlide() {
        slides.eq(currentIndex).removeClass('active'); // 현재 이미지 비활성화
        currentIndex = (currentIndex + 1) % slideCount; // 다음 이미지로 이동
        slides.eq(currentIndex).addClass('active'); // 다음 이미지 활성화
      }

      setInterval(showNextSlide, 2000); // 3초마다 슬라이드 전환




	const yearSelect = document.getElementById("year");
	const monthSelect = document.getElementById("month");
	const calendarBody = document.getElementById("calendarBody");
	const currentMonthYear = document.getElementById("currentMonthYear");
	const prevMonthBtn = document.getElementById("prevMonth");
	const nextMonthBtn = document.getElementById("nextMonth");
	let today = new Date();
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth();
	function populateYearMonth() {
		yearSelect.innerHTML = ""; // 초기화
		monthSelect.innerHTML = ""; // 초기화
		for (let i = currentYear - 5; i <= currentYear + 5; i++) {
			let option = document.createElement("option");
			option.value = i;
			option.textContent = `${i} 년`;
			if (i === currentYear) option.selected = true;
			yearSelect.appendChild(option);
		}
		for (let i = 0; i < 12; i++) {
			let option = document.createElement("option");
			option.value = i;
			option.textContent = `${i + 1} 월`;
			if (i === currentMonth) option.selected = true;
			monthSelect.appendChild(option);
		}
	}
	function renderCalendar(year, month) {
		calendarBody.innerHTML = "";
		let firstDay = new Date(year, month, 1).getDay();
		let lastDate = new Date(year, month + 1, 0).getDate();
		let row = document.createElement("tr");
		for (let i = 0; i < firstDay; i++) {
			row.appendChild(document.createElement("td"));
		}
		for (let day = 1; day <= lastDate; day++) {
			let cell = document.createElement("td");
			cell.textContent = day;
			if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
				cell.classList.add("today");
			}
			cell.addEventListener("click", function() {
				document.querySelectorAll(".calendar-table td").forEach(c => c.classList.remove("selected"));
				cell.classList.add("selected");
			});
			row.appendChild(cell);
			if ((firstDay + day) % 7 === 0) {
				calendarBody.appendChild(row);
				row = document.createElement("tr");
			}
		}
		calendarBody.appendChild(row);
		currentMonthYear.textContent = `${year}년 ${month + 1}월`;
	}
	function handleYearMonthChange() {
		currentYear = parseInt(yearSelect.value);
		currentMonth = parseInt(monthSelect.value);
		renderCalendar(currentYear, currentMonth);
	}
	populateYearMonth();
	renderCalendar(currentYear, currentMonth);
	prevMonthBtn.addEventListener("click", () => {
		currentMonth--;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		renderCalendar(currentYear, currentMonth);
	});
	nextMonthBtn.addEventListener("click", () => {
		currentMonth++;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		renderCalendar(currentYear, currentMonth);
	});
	yearSelect.addEventListener("change", handleYearMonthChange);
	monthSelect.addEventListener("change", handleYearMonthChange);

});
