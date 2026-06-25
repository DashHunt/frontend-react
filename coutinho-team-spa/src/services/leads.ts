import api from '../lib/api';

export interface LeadPayload {
  nome: string;
  email: string;
  telefone: string;
  historico?: string;
  planoSelecionado?: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  await api.post('/leads', payload);
}
