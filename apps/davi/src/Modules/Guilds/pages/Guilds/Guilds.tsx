import { useTypedParams } from 'Modules/Guilds/Hooks/useTypedParams';
import GuildSidebarWrapper from 'Modules/Guilds/Wrappers/GuildSidebarWrapper';
import { AllDiscussions } from '../AllDiscussions';
import { AllProposals } from '../AllProposals';
import { Governance } from '../Governance';
import { MembersPage } from '../Members';
import { Treasury } from '../Treasury';
import { PageContainer, PageContent, SidebarContent } from './Guilds.styled';

interface GuildsPageProps {
  pageContent?:
    | 'governance'
    | 'allProposals'
    | 'allDiscussions'
    | 'members'
    | 'treasury';
}

const GuildsPage: React.FC<GuildsPageProps> = ({
  pageContent = 'governance',
}) => {
  const { guildId } = useTypedParams();

  return (
    <PageContainer>
      <SidebarContent>
        <GuildSidebarWrapper />
      </SidebarContent>
      <PageContent>
        {pageContent === 'governance' && <Governance guildId={guildId} />}
        {pageContent === 'allProposals' && <AllProposals guildId={guildId} />}
        {pageContent === 'allDiscussions' && (
          <AllDiscussions guildId={guildId} />
        )}
        {pageContent === 'members' && <MembersPage />}
        {pageContent === 'treasury' && <Treasury />}
      </PageContent>
    </PageContainer>
  );
};

export default GuildsPage;
