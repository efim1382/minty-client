import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const formatMoney = (amount) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

const formatDate = (month, year) => {
	return `${String(month).padStart(2, "0")}/${year}`;
};

const generateYearlyData = (initialData, startMonth, startYear) => {
	const monthlyData = [];

	const currentIncome = initialData.income;
	const currentExpenses = initialData.expenses;
	let emergencyFund = initialData.emergencyStart;
	let investmentCapital = initialData.investmentStart;

	for (let month = startMonth; month < startMonth + 12; month++) {
		const currentMonth = month <= 12 ? month : month - 12;
		const currentYear = month <= 12 ? startYear : startYear + 1;

		const emergencyMonthlyPercent = initialData.growth.emergency / 12 / 100;
		const investmentMonthlyPercent = initialData.growth.investment / 12 / 100;

		const freeFunds = currentIncome - currentExpenses;

		// Calculate growths
		const emergencyGrowth = emergencyFund * emergencyMonthlyPercent;
		const investmentGrowth = investmentCapital * investmentMonthlyPercent;

		monthlyData.push({
			date: formatDate(currentMonth, currentYear),
			income: formatMoney(currentIncome),
			expenses: formatMoney(currentExpenses),
			freeFunds: formatMoney(freeFunds),
			emergencyFund: {
				current: formatMoney(emergencyFund),
				growth: formatMoney(emergencyGrowth),
			},
			investmentCapital: {
				current: formatMoney(investmentCapital),
				growth: formatMoney(investmentGrowth),
			},
			total: formatMoney(emergencyFund + investmentCapital),
		});

		// Distribute free funds
		if (emergencyFund < initialData.emergencySize * currentExpenses) {
			emergencyFund += freeFunds * (initialData.freeDistribution.emergency / 100);
			investmentCapital += freeFunds * (initialData.freeDistribution.investment / 100);
		} else {
			investmentCapital += freeFunds;
		}

		// Add the interest to the capitals for the next month
		emergencyFund += emergencyGrowth;
		investmentCapital += investmentGrowth;
	}

	return monthlyData;
};

const generateDecadeData = (startData) => {
	let decadeData = [];
	let currentMonth = startData.startMonth;
	let currentYear = startData.startYear;

	for (let year = 0; year < startData.years; year++) {
		const yearlyData = generateYearlyData(startData, currentMonth, currentYear);
		decadeData = decadeData.concat(yearlyData);

		currentMonth += 12;
		currentYear = currentMonth > 12 ? currentYear + 1 : currentYear;
		currentMonth = currentMonth > 12 ? currentMonth - 12 : currentMonth;

		// Update start data for the next year
		startData.income *= (1 + startData.growth.income / 100);
		startData.expenses *= (1 + startData.growth.expenses / 100);
	}

	return decadeData;
};

const startData = {
	startMonth: 1,
	startYear: 2023,
	income: 3000,
	expenses: 2200,
	emergencyStart: 2900,
	investmentStart: 1200,
	freeDistribution: {
		emergency: 50,
		investment: 50,
	},
	growth: {
		income: 20,
		expenses: 10,
		emergency: 3,
		investment: 8,
	},
	emergencySize: 6,
	years: 10,
};

const Planner = () => {
	const items = generateDecadeData(startData);

	return (
		<TableContainer component={Paper} elevation={0}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							rowSpan={2}
						>
							Date
						</TableCell>

						<TableCell
							align="center"
							rowSpan={2}
						>
							Income
						</TableCell>

						<TableCell
							align="center"
							rowSpan={2}
						>
							Expenses
						</TableCell>

						<TableCell
							align="center"
							rowSpan={2}
						>
							Free Funds
						</TableCell>

						<TableCell
							sx={{ border: 0 }}
							align="center"
							colSpan={2}
						>
							Emergency Fund
						</TableCell>

						<TableCell
							sx={{ border: 0 }}
							align="center"
							colSpan={2}
						>
							Investment Capital
						</TableCell>

						<TableCell
							align="center"
							rowSpan={2}
						>
							Total
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell sx={{ fontWeight: 400 }} align="center">current</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="center">%/mo.</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="center">current</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="center">%/mo.</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{items.map((row) => (
						<TableRow
							key={row.date}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell>{row.date}</TableCell>
							<TableCell align="right">{row.income}</TableCell>
							<TableCell align="right">{row.expenses}</TableCell>
							<TableCell align="right">{row.freeFunds}</TableCell>
							<TableCell align="right">{row.emergencyFund.current}</TableCell>
							<TableCell align="right">{row.emergencyFund.growth}</TableCell>
							<TableCell align="right">{row.investmentCapital.current}</TableCell>
							<TableCell align="right">{row.investmentCapital.growth}</TableCell>
							<TableCell align="right">{row.total}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Planner;
