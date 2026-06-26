import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { submitLead } from "../services/leads";
import type { LeadPayload } from "../services/leads";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";

type FormFields = Omit<LeadPayload, "planoSelecionado">;

interface LeadFormProps {
  selectedPlan?: string;
  onSuccess?: () => void;
}

export default function LeadForm({ selectedPlan, onSuccess }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: FormFields) => submitLead({ ...data, planoSelecionado: selectedPlan }),
    onSuccess: () => {
      reset();
      onSuccess?.();
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))} noValidate>
      <h3 className="text-[22px] mb-2.5">Faça seu cadastro</h3>
      <p className="text-[13.5px] text-cream/70 mb-5">
        Vamos dar início à sua jornada no Powerlifting. Preencha os campos abaixo:
      </p>

      <div className="mb-3.5">
        <Input
          {...register("nome", { required: "Nome é obrigatório" })}
          type="text"
          placeholder="Seu nome"
          error={errors.nome?.message}
        />
      </div>

      <div className="flex gap-3 mb-3.5">
        <div className="flex-1 min-w-0">
          <Input
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
            type="email"
            placeholder="E-mail"
            error={errors.email?.message}
          />
        </div>

        <div className="flex-1 min-w-0">
          <Input
            {...register("telefone", { required: "Telefone é obrigatório" })}
            type="tel"
            placeholder="Seu telefone"
            error={errors.telefone?.message}
          />
        </div>
      </div>

      <div className="mb-3.5">
        <Textarea
          {...register("historico")}
          rows={3}
          placeholder="Conte sobre sua experiência..."
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
          "w-full mt-1.5 inline-flex items-center justify-center gap-2 bg-ember text-[#160a05] " +
          "font-extrabold text-[15px] uppercase tracking-[0.5px] rounded-md px-8 py-4 " +
          "border-2 border-ember cursor-pointer transition-all duration-150 " +
          "hover:bg-[#ff7548] hover:shadow-[0_6px_24px_rgba(255,90,46,0.45)] hover:-translate-y-0.5 " +
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
        }
      >
        {isPending ? "Enviando…" : "Quero entrar para o time"}
      </button>
    </form>
  );
}
