import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	celphone: {
		type: String,
		required: true,
	},
	cpf: {
		type: String,
		required: true,
	},
	cep: {
		type: String,
		required: true,
	},
	neighborhood: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	languages: {
		type: [String],
		required: true,
	},
});

export default mongoose.model('User', Schema)

