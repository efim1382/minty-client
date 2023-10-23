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

const calculate = (amount) => parseFloat(amount.toFixed(2));

const generateItems = (config) => {
	const items = [];

	let currentMonth = config.month;
	let currentYear = config.year;

	let currentIncome = config.income;
	let currentExpenses = config.expenses;

	let currentEmergency = config.emergency;
	let currentInvestment = config.investment;

	for (let monthIteration = 0; monthIteration < (12 * config.years); monthIteration++) {
		const freeFunds = calculate(currentIncome - currentExpenses);
		const emergencyMonthlyIncome = calculate(((config.growth.emergency * currentEmergency) / 100) / 12);
		const investmentMonthlyIncome = calculate(((config.growth.investment * currentInvestment) / 100) / 12);
		const total = calculate(currentEmergency + currentInvestment);

		items.push({
			month: currentMonth,
			year: currentYear,
			income: currentIncome,
			expenses: currentExpenses,
			freeFunds: freeFunds,

			emergency: {
				current: currentEmergency,
				growth: emergencyMonthlyIncome,
			},

			investment: {
				current: currentInvestment,
				growth: investmentMonthlyIncome,
			},

			total,
		});

		// annual increase in investment
		currentInvestment += investmentMonthlyIncome;

		const investmentPercent = currentExpenses * config.emergencySize
			? config.freeDistribution.investment
			: 100;

		currentInvestment += (investmentPercent * freeFunds) / 100;
		currentInvestment = calculate(currentInvestment);

		// annual increase in emergency fund
		currentEmergency += emergencyMonthlyIncome;

		if (currentEmergency < currentExpenses * config.emergencySize) {
			currentEmergency += (config.freeDistribution.emergency * freeFunds) / 100;
		}

		currentEmergency = calculate(currentEmergency);

		// annual increase in income/expenses
		if (currentMonth === 12) {
			currentIncome += (config.growth.income * currentIncome) / 100;
			currentIncome = calculate(currentIncome);

			currentExpenses += (config.growth.expenses * currentExpenses) / 100;
			currentExpenses = calculate(currentExpenses);
		}

		// increment date for the next iteration
		currentYear = currentMonth === 12 ? currentYear + 1 : currentYear;
		currentMonth = currentMonth < 12 ? currentMonth + 1 : 1;
	}

	return items;
};

const plannerConfig = {
	years: 10,
	income: 3000,
	expenses: 2200,
	month: 8,
	year: 2023,
	emergency: 2900,
	investment: 1200,
	emergencySize: 6,

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
};

const Planner = () => {
	const items = generateItems(plannerConfig);

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
							align="right"
							rowSpan={2}
						>
							Income
						</TableCell>

						<TableCell
							align="right"
							rowSpan={2}
						>
							Expenses
						</TableCell>

						<TableCell
							align="right"
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
							align="right"
							rowSpan={2}
						>
							Total
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell sx={{ fontWeight: 400 }} align="right">current</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="right">%/mo.</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="right">current</TableCell>
						<TableCell sx={{ fontWeight: 400 }} align="right">%/mo.</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{items.map((row) => {
						const formattedData = {
							date: formatDate(row.month, row.year),
							income: formatMoney(row.income),
							expenses: formatMoney(row.expenses),
							freeFunds: formatMoney(row.freeFunds),

							emergency: {
								current: formatMoney(row.emergency.current),
								growth: formatMoney(row.emergency.growth),
							},

							investment: {
								current: formatMoney(row.investment.current),
								growth: formatMoney(row.investment.growth),
							},

							total: formatMoney(row.total),
						};

						return (
							<TableRow
								key={formattedData.date}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell align="center">{formattedData.date}</TableCell>
								<TableCell align="right">{formattedData.income}</TableCell>
								<TableCell align="right">{formattedData.expenses}</TableCell>
								<TableCell align="right">{formattedData.freeFunds}</TableCell>
								<TableCell align="right">{formattedData.emergency.current}</TableCell>
								<TableCell align="right">{formattedData.emergency.growth}</TableCell>
								<TableCell align="right">{formattedData.investment.current}</TableCell>
								<TableCell align="right">{formattedData.investment.growth}</TableCell>
								<TableCell align="right">{formattedData.total}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Planner;
