import { FullGovernanceImplementation } from 'stores/types';
import { checkDataSourceAvailability } from './checkDataSourceAvailability';
import { useVoterLockTimestamp } from './fetchers/useVoterLockTimestamp';

export const governance1_5Implementation: Readonly<FullGovernanceImplementation> =
  {
    name: 'Governance1_5',
    bytecodes: [],
    hooks: {
      fetchers: {
        default: {
          useProposal: null,
          useSnapshotId: null,
          useTotalLocked: null,
          useDAOToken: null,
          useIsProposalCreationAllowed: null,
          useProposalVotesOfVoter: null,
          useVoterLockTimestamp: useVoterLockTimestamp,
          useProposalCalls: null,
          useVotingResults: null,
          useVotingPowerOf: null,
          useMemberCount: null,
          useGetPermissions: null,
          useGuildConfig: null,
          useGetVotes: null,
          useGetMemberList: null,
          useGetAllPermissions: null,
          useGetNumberOfActiveProposals: null,
          useGuildProposalIds: null,
        },
        fallback: {
          useProposal: null,
          useSnapshotId: null,
          useTotalLocked: null,
          useDAOToken: null,
          useIsProposalCreationAllowed: null,
          useProposalVotesOfVoter: null,
          useVoterLockTimestamp: useVoterLockTimestamp,
          useProposalCalls: null,
          useVotingResults: null,
          useVotingPowerOf: null,
          useMemberCount: null,
          useGetPermissions: null,
          useGuildConfig: null,
          useGetVotes: null,
          useGetMemberList: null,
          useGetAllPermissions: null,
          useGetNumberOfActiveProposals: null,
          useGuildProposalIds: null,
        },
      },
      writers: {
        useApproveTokens: null,
        useCreateProposal: null,
        useExecuteProposal: null,
        useLockTokens: null,
        useVoteOnProposal: null,
        useWithdrawTokens: null,
      },
    },
    capabilities: {
      votingPower: 'soulbound',
      tokenType: 'ERC20',
      consensus: 'holographic',
      votingStyle: 'binary',
      votingPowerTally: 'snapshot',
    },
    checkDataSourceAvailability,
  };
