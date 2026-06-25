import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { submitLead } from '../services/leads';
import type { LeadPayload } from '../services/leads';

type FormFields = Omit<LeadPayload, 'planoSelecionado'>;

interface LeadFormProps {
  selectedPlan?: string;
  onSuccess?: () => void;
}

const INPUT_BASE =
  'w-full bg-base rounded-lg px-3.5 py-3 text-cream font-body text-[14px] ' +
  'outline-none transition-colors duration-150 placeholder:text-cream/40 border ';

export default function LeadForm({ selectedPlan, onSuccess }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: FormFields) =>
      submitLead({ ...data, planoSelecionado: selectedPlan }),
    onSuccess: () => {
      reset();
      onSuccess?.();
    },
  });

  const inputClass = (hasError: boolean) =>
    INPUT_BASE +
    (hasError ? 'border-red-400 focus:border-red-400' : 'border-bone/12 focus:border-ember');

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))} noValidate>
      {/* Nome */}
      <div className="mb-3.5">
        <input
          {...register('nome', { required: 'Nome é obrigatório' })}
          type="text"
          placeholder="Seu nome"
          className={inputClass(!!errors.nome)}
        />
        {errors.nome && (
          <p className="mt-1 text-[12px] text-red-400">{errors.nome.message}</p>
        )}
      </div>

      {/* E-mail + Telefone */}
      <div className="flex gap-3 mb-3.5">
        <div className="flex-1 min-w-0">
          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            type="email"
            placeholder="E-mail"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-[12px] text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <input
            {...register('telefone', { required: 'Telefone é obrigatório' })}
            type="tel"
            placeholder="Telefone"
            className={inputClass(!!errors.telefone)}
          />
          {errors.telefone && (
            <p className="mt-1 text-[12px] text-red-400">{errors.telefone.message}</p>
          )}
        </div>
      </div>

      {/* Histórico (opcional) */}
      <div className="mb-3.5">
        <textarea
          {...register('historico')}
          rows={3}
          placeholder="Conte um pouco sobre sua experiência prévia com esportes ou atividade física"
          className={`${inputClass(false)} resize-none`}
        />
      </div>

      {/* Erro genérico de API */}
      {isError && (
        <p className="mb-3 text-[13px] text-red-400 text-center">
          Algo deu errado. Por favor, tente novamente.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className={
          'w-full mt-1.5 inline-flex items-center justify-center gap-2 bg-ember text-[#160a05] ' +
          'font-extrabold text-[15px] uppercase tracking-[0.5px] rounded-md px-8 py-4 ' +
          'border-2 border-ember cursor-pointer transition-all duration-150 ' +
          'hover:bg-[#ff7548] hover:shadow-[0_6px_24px_rgba(255,90,46,0.45)] hover:-translate-y-0.5 ' +
          'disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none'
        }
      >
        {isPending ? 'Enviando…' : 'Quero entrar para o time'}
      </button>
    </form>
  );
}
