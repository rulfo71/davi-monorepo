import { Button } from 'components/primitives/Button';
import { useTranslation } from 'react-i18next';
export interface GuestActionsProps {
  userWalletAddress?: string;
  onShowStakeModal?: () => void;
  onShowWalletModal?: () => void;
}

export const GuestActions: React.FC<GuestActionsProps> = ({
  userWalletAddress,
  onShowStakeModal,
  onShowWalletModal,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {userWalletAddress ? (
        <Button
          data-testid="open-stake-tokens-modal-btn"
          variant="terciary"
          onClick={onShowStakeModal}
        >
          {t('join')}
        </Button>
      ) : (
        <Button
          variant="terciary"
          onClick={onShowWalletModal}
          data-testid={'guest-action-connect-wallet'}
        >
          {t('connectWallet')}
        </Button>
      )}
    </>
  );
};
