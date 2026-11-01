import { useSidebarLinks } from "@/hooks/useSidebarLinks";
import { useTranslations } from "next-intl";
import NavbarMobileSheet from "../navbar/mobile/NavbarMobileSheet";
import MobileNavLinks from "../navbar/mobile/MobileNavLinks";
import MobileDropdownMenu from "../navbar/mobile/MobileDropdownMenu";
import { useAuth } from "@/providers";

interface SidebarMobileMenuProps {
  open: boolean;
  pathname: string;
  onClose: () => void;
}

const SidebarMobileMenu = ({
  open,
  pathname,
  onClose,
}: SidebarMobileMenuProps) => {
  const tNav = useTranslations("navigation");

  const { isUser, isContentManager, isAdmin } = useAuth();

  const { navLinks, financeManageLinks, contentManageLinks, adminManageLinks } =
    useSidebarLinks();

  return (
    <NavbarMobileSheet open={open} onClose={onClose}>
      <MobileNavLinks
        links={navLinks}
        pathname={pathname}
        onLinkClick={onClose}
      />

      {isUser && (
        <MobileDropdownMenu
          label={tNav("dashboard.finance.base")}
          links={financeManageLinks}
          pathname={pathname}
          onLinkClick={onClose}
        />
      )}

      {isContentManager && (
        <MobileDropdownMenu
          label={tNav("dashboard.content.base")}
          links={contentManageLinks}
          pathname={pathname}
          onLinkClick={onClose}
        />
      )}

      {isAdmin && (
        <MobileDropdownMenu
          label={tNav("dashboard.admin.base")}
          links={adminManageLinks}
          pathname={pathname}
          onLinkClick={onClose}
        />
      )}
    </NavbarMobileSheet>
  );
};

export default SidebarMobileMenu;
