
# EzResume 🧠✂️  
Sistema de resumos com IA - Frontend em React + Vite, Backend em Node.js

## 🧭 Estrutura de Branches

Este projeto utiliza **três branches principais** para organização do desenvolvimento:

| Branch     | Descrição                                      |
|------------|-----------------------------------------------|
| `main`     | Versão final e estável do projeto             |
| `frontend` | Desenvolvimento contínuo do frontend (React)  |
| `backend`  | Desenvolvimento contínuo do backend (Node.js) |

---

## 🚀 Como Trabalhar com as Branches

### 🔧 1. Frontend (React + Vite)

Para trabalhar nas funcionalidades do frontend:

```bash
git checkout frontend
```

Faça suas alterações dentro da pasta `frontend/`.  
Depois de concluir e testar:

```bash
git add .
git commit -m "feat(frontend): implementa componente de login"
git push
```

---

### 🛠 2. Backend (Node.js)

Para trabalhar nas funcionalidades do backend:

```bash
git checkout backend
```

Faça suas alterações dentro da pasta `backend/`.  
Depois de concluir e testar:

```bash
git add .
git commit -m "feat(backend): cria rota de geração de resumo"
git push
```

---

## 🧩 Juntando Tudo na `main`

Quando as funcionalidades estiverem prontas e testadas nas branches `frontend` e `backend`, você pode unir tudo na branch principal:

```bash
# 1. Volte para a branch principal
git checkout main

# 2. Traga as alterações do frontend
git merge frontend

# 3. Traga as alterações do backend
git merge backend

# 4. Envie tudo para o repositório remoto
git push
```

> 💡 *Dica:* sempre faça `git pull` antes de um merge para garantir que está atualizado:
```bash
git pull origin main
```

---

## 📎 Exemplo de Mensagens de Commit

Use mensagens padronizadas para clareza:

- `feat(frontend): adiciona tela de login`
- `fix(backend): corrige validação de token`
- `refactor(frontend): melhora organização do menu`

---

## ✅ Checklist para merge na `main`

- [ ] Testou o que desenvolveu no frontend/backend?
- [ ] Resolveu possíveis conflitos de merge?
- [ ] Commit com mensagem clara?
- [ ] Deu push final?

Se sim, pode fazer o merge na `main`! 🚀

---

## 🧠 Dúvidas?

Entre em contato ou veja a wiki do projeto (caso exista).

---
