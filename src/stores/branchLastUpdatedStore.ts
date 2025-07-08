import { defineStore } from 'pinia'
import { ref } from 'vue'

const REPOSITORY = 'Oktalon-Szoradi/oktalon-szoradi.github.io'
const BRANCH = 'gh-pages'

export const useBranchLastUpdatedStore = defineStore(
  'branchLastUpdated',
  () => {
    const lastUpdated = ref<string | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function fetchLastUpdated() {
      loading.value = true
      error.value = null
      try {
        // Fetch branch info to get the latest commit SHA
        const branchRes = await fetch(
          `https://api.github.com/repos/${REPOSITORY}/branches/${BRANCH}`
        )
        if (!branchRes.ok) throw new Error('Failed to fetch branch info')
        const branchData = await branchRes.json()
        const commitSha = branchData?.commit?.sha
        if (!commitSha) throw new Error('No commit SHA found for branch')

        // Fetch commit info to get the committer date
        const commitRes = await fetch(
          `https://api.github.com/repos/${REPOSITORY}/commits/${commitSha}`
        )
        if (!commitRes.ok) throw new Error('Failed to fetch commit info')
        const commitData = await commitRes.json()
        const committerDate = commitData?.commit?.committer?.date
        if (!committerDate) throw new Error('No committer date found')

        lastUpdated.value = committerDate
      } catch (e: any) {
        error.value = e.message || 'Unknown error'
        lastUpdated.value = null
      } finally {
        loading.value = false
      }
    }

    return { lastUpdated, loading, error, fetchLastUpdated }
  }
)
