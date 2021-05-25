export interface CreditProfile {
	id: string,
	creditProfileDate: Date;
	creditRiskrating: number;
	creditScore: number;
	validFor: number;
	baseType: string;
	schemaLocation: string;
	type: string;
}
