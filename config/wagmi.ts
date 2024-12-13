import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon, base } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'


 // ProjectId -> only works on localhost for testing
export const projectId = "b56e18d47c72ab683b10814fe9495694"

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, polygon, base];

export const wagmiAdapter = new WagmiAdapter({
  networks: networks,
  projectId
})
