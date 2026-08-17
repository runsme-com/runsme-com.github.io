<template>
  <div class="repos-grid">
    <a
      v-for="repo in repoList"
      :key="repo.id"
      :href="repo.html_url"
      target="_blank"
      class="repo-card"
    >
      <h3 class="repo-name">{{ repo.name }}</h3>
      <p class="repo-desc">{{ repo.description || 'No description' }}</p>
      <div class="repo-meta">
        <span class="lang" v-if="repo.language">{{ repo.language }}</span>
        <span class="stars">★ {{ repo.stargazers_count }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface RepoItem {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
}

const repoList = ref<RepoItem[]>([])

const fetchRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/orgs/runsme-com/repos?sort=updated&per_page=6')
    const data = await res.json()
    repoList.value = data
  } catch (err) {
    console.error('Failed fetch organization repos', err)
  }
}

onMounted(() => {
  fetchRepos()
})
</script>

<style scoped>
.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 2rem 0;
}

.repo-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  transition: 0.25s ease;
}

.repo-card:hover {
  transform: translateY(-3px);
  border-color: #8c36db;
}

.repo-name {
  font-size: 18px;
  font-weight: 600;
  color: #8c36db;
  margin-bottom: 8px;
}

.repo-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
  margin-bottom: 12px;
}

.repo-meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

@media (max-width: 720px) {
  .repos-grid {
    grid-template-columns: 1fr;
  }
}
</style>